import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutTax_providerInput } from "../inputs/AppCreateOrConnectWithoutTax_providerInput";
import { AppCreateWithoutTax_providerInput } from "../inputs/AppCreateWithoutTax_providerInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutTax_providerInput", {})
export class AppCreateNestedOneWithoutTax_providerInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutTax_providerInput, {
    nullable: true
  })
  create?: AppCreateWithoutTax_providerInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutTax_providerInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutTax_providerInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
