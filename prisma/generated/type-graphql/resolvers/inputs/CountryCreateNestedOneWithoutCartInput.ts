import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCartInput } from "../inputs/CountryCreateOrConnectWithoutCartInput";
import { CountryCreateWithoutCartInput } from "../inputs/CountryCreateWithoutCartInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutCartInput", {})
export class CountryCreateNestedOneWithoutCartInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCartInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
