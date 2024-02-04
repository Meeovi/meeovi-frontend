import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManyLanguageInputEnvelope } from "../inputs/LanguageCreateManyLanguageInputEnvelope";
import { LanguageCreateOrConnectWithoutLanguageInput } from "../inputs/LanguageCreateOrConnectWithoutLanguageInput";
import { LanguageCreateWithoutLanguageInput } from "../inputs/LanguageCreateWithoutLanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedManyWithoutLanguageInput", {})
export class LanguageCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [LanguageCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: LanguageCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: LanguageCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput[] | undefined;
}
