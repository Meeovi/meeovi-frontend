import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CountryOrderByWithRelationAndSearchRelevanceInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";
import { CountryScalarFieldEnum } from "../../../../enums/CountryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CountryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CountryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "iso" | "position" | "tax_free" | "active" | "iso3" | "display_state_in_registration" | "force_state_in_registration" | "company_tax_free" | "check_vat_id_pattern" | "vat_id_pattern" | "vat_id_required" | "customer_tax" | "company_tax" | "advanced_postal_code_pattern" | "check_advanced_postal_code_pattern" | "check_postal_code_pattern" | "default_postal_code_pattern" | "postal_code_required" | "created_at" | "updated_at" | "shipping_available"> | undefined;
}
