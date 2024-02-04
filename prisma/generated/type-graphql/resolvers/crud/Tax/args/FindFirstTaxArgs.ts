import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TaxOrderByWithRelationAndSearchRelevanceInput";
import { TaxWhereInput } from "../../../inputs/TaxWhereInput";
import { TaxWhereUniqueInput } from "../../../inputs/TaxWhereUniqueInput";
import { TaxScalarFieldEnum } from "../../../../enums/TaxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTaxArgs {
  @TypeGraphQL.Field(_type => TaxWhereInput, {
    nullable: true
  })
  where?: TaxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaxOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TaxOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TaxWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TaxScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tax_rate" | "name" | "position" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
