import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Custom_field_set_relationOrderByWithRelationAndSearchRelevanceInput";
import { Custom_field_set_relationWhereInput } from "../../../inputs/Custom_field_set_relationWhereInput";
import { Custom_field_set_relationWhereUniqueInput } from "../../../inputs/Custom_field_set_relationWhereUniqueInput";
import { Custom_field_set_relationScalarFieldEnum } from "../../../../enums/Custom_field_set_relationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  where?: Custom_field_set_relationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Custom_field_set_relationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Custom_field_set_relationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "set_id" | "entity_name" | "created_at" | "updated_at"> | undefined;
}
