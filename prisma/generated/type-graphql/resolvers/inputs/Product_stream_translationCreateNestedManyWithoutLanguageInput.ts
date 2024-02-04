import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_stream_translationCreateManyLanguageInputEnvelope";
import { Product_stream_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_stream_translationCreateOrConnectWithoutLanguageInput";
import { Product_stream_translationCreateWithoutLanguageInput } from "../inputs/Product_stream_translationCreateWithoutLanguageInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationCreateNestedManyWithoutLanguageInput", {})
export class Product_stream_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_stream_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_stream_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_translationWhereUniqueInput[] | undefined;
}
