import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutTax_providerInput } from "../inputs/AppUpdateWithoutTax_providerInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutTax_providerInput", {})
export class AppUpdateToOneWithWhereWithoutTax_providerInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutTax_providerInput, {
    nullable: false
  })
  data!: AppUpdateWithoutTax_providerInput;
}
