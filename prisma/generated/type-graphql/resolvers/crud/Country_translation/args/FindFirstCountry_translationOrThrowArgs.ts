import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Country_translationOrderByWithRelationAndSearchRelevanceInput";
import { Country_translationWhereInput } from "../../../inputs/Country_translationWhereInput";
import { Country_translationWhereUniqueInput } from "../../../inputs/Country_translationWhereUniqueInput";
import { Country_translationScalarFieldEnum } from "../../../../enums/Country_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCountry_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  where?: Country_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Country_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Country_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Country_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Country_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"country_id" | "language_id" | "name" | "address_format" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
