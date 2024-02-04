import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleOrderByWithAggregationInput } from "../../../inputs/Acl_roleOrderByWithAggregationInput";
import { Acl_roleScalarWhereWithAggregatesInput } from "../../../inputs/Acl_roleScalarWhereWithAggregatesInput";
import { Acl_roleWhereInput } from "../../../inputs/Acl_roleWhereInput";
import { Acl_roleScalarFieldEnum } from "../../../../enums/Acl_roleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAcl_roleArgs {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Acl_roleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Acl_roleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_roleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "privileges" | "created_at" | "updated_at" | "deleted_at">;

  @TypeGraphQL.Field(_type => Acl_roleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Acl_roleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
