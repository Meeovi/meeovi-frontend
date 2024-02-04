import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Property_group_translationOrderByWithRelationAndSearchRelevanceInput";
import { Property_group_translationWhereInput } from "../../../inputs/Property_group_translationWhereInput";
import { Property_group_translationWhereUniqueInput } from "../../../inputs/Property_group_translationWhereUniqueInput";
import { Property_group_translationScalarFieldEnum } from "../../../../enums/Property_group_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_translationWhereInput, {
    nullable: true
  })
  where?: Property_group_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_group_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Property_group_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Property_group_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Property_group_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Property_group_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"property_group_id" | "language_id" | "name" | "description" | "position" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
