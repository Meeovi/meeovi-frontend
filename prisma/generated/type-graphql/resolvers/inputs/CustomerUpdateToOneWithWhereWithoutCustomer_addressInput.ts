import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutCustomer_addressInput } from "../inputs/CustomerUpdateWithoutCustomer_addressInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutCustomer_addressInput", {})
export class CustomerUpdateToOneWithWhereWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_addressInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutCustomer_addressInput;
}
