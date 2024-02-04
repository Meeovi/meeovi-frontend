import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_user_roleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Acl_user_roleOrderByWithRelationAndSearchRelevanceInput";
import { Acl_user_roleWhereInput } from "../../../inputs/Acl_user_roleWhereInput";
import { Acl_user_roleWhereUniqueInput } from "../../../inputs/Acl_user_roleWhereUniqueInput";
import { Acl_user_roleScalarFieldEnum } from "../../../../enums/Acl_user_roleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAcl_user_roleArgs {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereInput, {
    nullable: true
  })
  where?: Acl_user_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Acl_user_roleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Acl_user_roleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"user_id" | "acl_role_id" | "created_at" | "updated_at"> | undefined;
}
