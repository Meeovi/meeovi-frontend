import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamUpdateWithoutProduct_stream_translationInput } from "../inputs/Product_streamUpdateWithoutProduct_stream_translationInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpdateToOneWithWhereWithoutProduct_stream_translationInput", {})
export class Product_streamUpdateToOneWithWhereWithoutProduct_stream_translationInput {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_stream_translationInput, {
    nullable: false
  })
  data!: Product_streamUpdateWithoutProduct_stream_translationInput;
}
