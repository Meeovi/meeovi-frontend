import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageCreateInput } from "../../../inputs/Landing_pageCreateInput";
import { Landing_pageUpdateInput } from "../../../inputs/Landing_pageUpdateInput";
import { Landing_pageWhereUniqueInput } from "../../../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_pageCreateInput, {
    nullable: false
  })
  create!: Landing_pageCreateInput;

  @TypeGraphQL.Field(_type => Landing_pageUpdateInput, {
    nullable: false
  })
  update!: Landing_pageUpdateInput;
}
