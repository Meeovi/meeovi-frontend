import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LocaleOrderByWithRelationAndSearchRelevanceInput";
import { LocaleWhereInput } from "../../../inputs/LocaleWhereInput";
import { LocaleWhereUniqueInput } from "../../../inputs/LocaleWhereUniqueInput";
import { LocaleScalarFieldEnum } from "../../../../enums/LocaleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocaleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: LocaleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocaleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocaleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "code" | "created_at" | "updated_at"> | undefined;
}
