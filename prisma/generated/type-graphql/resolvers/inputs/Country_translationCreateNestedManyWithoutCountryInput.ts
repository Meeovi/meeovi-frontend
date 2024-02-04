import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateManyCountryInputEnvelope } from "../inputs/Country_translationCreateManyCountryInputEnvelope";
import { Country_translationCreateOrConnectWithoutCountryInput } from "../inputs/Country_translationCreateOrConnectWithoutCountryInput";
import { Country_translationCreateWithoutCountryInput } from "../inputs/Country_translationCreateWithoutCountryInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationCreateNestedManyWithoutCountryInput", {})
export class Country_translationCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [Country_translationCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Country_translationCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Country_translationCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_translationCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Country_translationCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_translationWhereUniqueInput[] | undefined;
}
