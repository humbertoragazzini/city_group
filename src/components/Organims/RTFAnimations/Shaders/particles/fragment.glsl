varying vec3 vColor;

void main()
{
    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - 0.5);
    float alpha = 0.05 / distanceToCenter - 0.1;
    float uVcolor = abs(cos(uv.x * 3.14)) + abs(cos(uv.y*3.14)) - 0.1;    

    gl_FragColor = vec4(vec3(uVcolor), alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
