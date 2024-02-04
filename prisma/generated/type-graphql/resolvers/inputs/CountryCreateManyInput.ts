import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CountryCreateManyInput", {})
export class CountryCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  iso?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  tax_free?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  iso3?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  display_state_in_registration?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  force_state_in_registration?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  company_tax_free?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  check_vat_id_pattern?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_id_pattern?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  vat_id_required?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  advanced_postal_code_pattern?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  check_advanced_postal_code_pattern?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  check_postal_code_pattern?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_postal_code_pattern?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  postal_code_required?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  shipping_available?: boolean | undefined;
}
