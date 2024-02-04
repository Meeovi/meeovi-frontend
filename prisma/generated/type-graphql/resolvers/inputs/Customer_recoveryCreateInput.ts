import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateNestedOneWithoutCustomer_recoveryInput";

@TypeGraphQL.InputType("Customer_recoveryCreateInput", {})
export class Customer_recoveryCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hash!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutCustomer_recoveryInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutCustomer_recoveryInput;
}
