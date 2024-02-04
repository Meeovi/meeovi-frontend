import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateManyLanguageInputEnvelope } from "../inputs/Currency_translationCreateManyLanguageInputEnvelope";
import { Currency_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Currency_translationCreateOrConnectWithoutLanguageInput";
import { Currency_translationCreateWithoutLanguageInput } from "../inputs/Currency_translationCreateWithoutLanguageInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationCreateNestedManyWithoutLanguageInput", {})
export class Currency_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Currency_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Currency_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Currency_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_translationWhereUniqueInput[] | undefined;
}
