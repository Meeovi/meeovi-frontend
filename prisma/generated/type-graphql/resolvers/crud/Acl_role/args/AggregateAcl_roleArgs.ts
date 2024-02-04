import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Acl_roleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Acl_roleOrderByWithRelationAndSearchRelevanceInput";
import { Acl_roleWhereInput } from "../../../inputs/Acl_roleWhereInput";
import { Acl_roleWhereUniqueInput } from "../../../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAcl_roleArgs {
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
}
