import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutTax_providerInput } from "../inputs/AppCreateWithoutTax_providerInput";
import { AppUpdateWithoutTax_providerInput } from "../inputs/AppUpdateWithoutTax_providerInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutTax_providerInput", {})
export class AppUpsertWithoutTax_providerInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutTax_providerInput, {
    nullable: false
  })
  update!: AppUpdateWithoutTax_providerInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutTax_providerInput, {
    nullable: false
  })
  create!: AppCreateWithoutTax_providerInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
