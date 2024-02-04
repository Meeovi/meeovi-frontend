import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Document_type_translationOrderByWithRelationAndSearchRelevanceInput";
import { Document_type_translationWhereInput } from "../../../inputs/Document_type_translationWhereInput";
import { Document_type_translationWhereUniqueInput } from "../../../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  where?: Document_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Document_type_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Document_type_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
