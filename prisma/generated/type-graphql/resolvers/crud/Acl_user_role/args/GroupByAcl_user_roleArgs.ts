import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleOrderByWithAggregationInput } from "../../../inputs/Acl_user_roleOrderByWithAggregationInput";
import { Acl_user_roleScalarWhereWithAggregatesInput } from "../../../inputs/Acl_user_roleScalarWhereWithAggregatesInput";
import { Acl_user_roleWhereInput } from "../../../inputs/Acl_user_roleWhereInput";
import { Acl_user_roleScalarFieldEnum } from "../../../../enums/Acl_user_roleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  where?: Acl_user_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Acl_user_roleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"user_id" | "acl_role_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Acl_user_roleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Acl_user_roleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
