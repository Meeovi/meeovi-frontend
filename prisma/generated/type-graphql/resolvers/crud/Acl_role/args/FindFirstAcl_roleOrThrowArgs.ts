import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Acl_roleOrderByWithRelationAndSearchRelevanceInput";
import { Acl_roleWhereInput } from "../../../inputs/Acl_roleWhereInput";
import { Acl_roleWhereUniqueInput } from "../../../inputs/Acl_roleWhereUniqueInput";
import { Acl_roleScalarFieldEnum } from "../../../../enums/Acl_roleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAcl_roleOrThrowArgs {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Acl_roleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Acl_roleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Acl_roleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Acl_roleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "privileges" | "created_at" | "updated_at" | "deleted_at"> | undefined;
}
