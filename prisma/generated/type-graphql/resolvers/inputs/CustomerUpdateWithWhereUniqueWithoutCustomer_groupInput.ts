import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutCustomer_groupInput } from "../inputs/CustomerUpdateWithoutCustomer_groupInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutCustomer_groupInput", {})
export class CustomerUpdateWithWhereUniqueWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_groupInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutCustomer_groupInput;
}
