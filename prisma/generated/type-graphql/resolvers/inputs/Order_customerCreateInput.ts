import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutOrder_customerInput } from "../inputs/CustomerCreateNestedOneWithoutOrder_customerInput";
import { OrderCreateNestedOneWithoutOrder_customerInput } from "../inputs/OrderCreateNestedOneWithoutOrder_customerInput";
import { SalutationCreateNestedOneWithoutOrder_customerInput } from "../inputs/SalutationCreateNestedOneWithoutOrder_customerInput";

@TypeGraphQL.InputType("Order_customerCreateInput", {})
export class Order_customerCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_ids?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  remote_address?: string | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrder_customerInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedOneWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_customerInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_customerInput;

  @TypeGraphQL.Field(_type => SalutationCreateNestedOneWithoutOrder_customerInput, {
    nullable: true
  })
  salutation?: SalutationCreateNestedOneWithoutOrder_customerInput | undefined;
}
