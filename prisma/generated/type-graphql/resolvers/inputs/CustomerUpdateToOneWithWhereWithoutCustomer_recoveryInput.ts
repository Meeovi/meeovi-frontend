import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutCustomer_recoveryInput } from "../inputs/CustomerUpdateWithoutCustomer_recoveryInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutCustomer_recoveryInput", {})
export class CustomerUpdateToOneWithWhereWithoutCustomer_recoveryInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_recoveryInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutCustomer_recoveryInput;
}
