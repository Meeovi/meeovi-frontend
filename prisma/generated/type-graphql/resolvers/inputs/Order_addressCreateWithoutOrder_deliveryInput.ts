import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateNestedOneWithoutOrder_addressInput } from "../inputs/CountryCreateNestedOneWithoutOrder_addressInput";
import { Country_stateCreateNestedOneWithoutOrder_addressInput } from "../inputs/Country_stateCreateNestedOneWithoutOrder_addressInput";
import { OrderCreateNestedOneWithoutOrder_addressInput } from "../inputs/OrderCreateNestedOneWithoutOrder_addressInput";
import { SalutationCreateNestedOneWithoutOrder_addressInput } from "../inputs/SalutationCreateNestedOneWithoutOrder_addressInput";

@TypeGraphQL.InputType("Order_addressCreateWithoutOrder_deliveryInput", {})
export class Order_addressCreateWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  street!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_address_line1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_address_line2?: string | undefined;

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

  @TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutOrder_addressInput, {
    nullable: false
  })
  country!: CountryCreateNestedOneWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => Country_stateCreateNestedOneWithoutOrder_addressInput, {
    nullable: true
  })
  country_state?: Country_stateCreateNestedOneWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_addressInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => SalutationCreateNestedOneWithoutOrder_addressInput, {
    nullable: true
  })
  salutation?: SalutationCreateNestedOneWithoutOrder_addressInput | undefined;
}
