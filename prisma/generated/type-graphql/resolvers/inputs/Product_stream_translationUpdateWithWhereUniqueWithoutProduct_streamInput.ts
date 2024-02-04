import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationUpdateWithoutProduct_streamInput } from "../inputs/Product_stream_translationUpdateWithoutProduct_streamInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationUpdateWithWhereUniqueWithoutProduct_streamInput", {})
export class Product_stream_translationUpdateWithWhereUniqueWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateWithoutProduct_streamInput, {
    nullable: false
  })
  data!: Product_stream_translationUpdateWithoutProduct_streamInput;
}
