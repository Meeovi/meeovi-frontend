import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_slotOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Cms_slotOrderByWithRelationAndSearchRelevanceInput";
import { Cms_slotWhereInput } from "../../../inputs/Cms_slotWhereInput";
import { Cms_slotWhereUniqueInput } from "../../../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCms_slotArgs {
  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  where?: Cms_slotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Cms_slotOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slotWhereUniqueInput, {
    nullable: true
  })
  cursor?: Cms_slotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
