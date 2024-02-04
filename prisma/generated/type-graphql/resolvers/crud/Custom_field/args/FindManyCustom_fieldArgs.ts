import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Custom_fieldOrderByWithRelationAndSearchRelevanceInput";
import { Custom_fieldWhereInput } from "../../../inputs/Custom_fieldWhereInput";
import { Custom_fieldWhereUniqueInput } from "../../../inputs/Custom_fieldWhereUniqueInput";
import { Custom_fieldScalarFieldEnum } from "../../../../enums/Custom_fieldScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  where?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Custom_fieldOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: true
  })
  cursor?: Custom_fieldWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "type" | "config" | "active" | "set_id" | "created_at" | "updated_at" | "allow_customer_write" | "allow_cart_expose"> | undefined;
}
