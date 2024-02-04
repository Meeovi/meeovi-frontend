import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationUpdateWithoutLanguageInput } from "../inputs/Product_stream_translationUpdateWithoutLanguageInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Product_stream_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_stream_translationUpdateWithoutLanguageInput;
}
