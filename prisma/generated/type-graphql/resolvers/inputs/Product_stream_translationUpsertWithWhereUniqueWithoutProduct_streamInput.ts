import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCreateWithoutProduct_streamInput } from "../inputs/Product_stream_translationCreateWithoutProduct_streamInput";
import { Product_stream_translationUpdateWithoutProduct_streamInput } from "../inputs/Product_stream_translationUpdateWithoutProduct_streamInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationUpsertWithWhereUniqueWithoutProduct_streamInput", {})
export class Product_stream_translationUpsertWithWhereUniqueWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateWithoutProduct_streamInput, {
    nullable: false
  })
  update!: Product_stream_translationUpdateWithoutProduct_streamInput;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateWithoutProduct_streamInput, {
    nullable: false
  })
  create!: Product_stream_translationCreateWithoutProduct_streamInput;
}
