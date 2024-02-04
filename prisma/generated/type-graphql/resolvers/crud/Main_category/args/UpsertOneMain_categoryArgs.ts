import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryCreateInput } from "../../../inputs/Main_categoryCreateInput";
import { Main_categoryUpdateInput } from "../../../inputs/Main_categoryUpdateInput";
import { Main_categoryWhereUniqueInput } from "../../../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryCreateInput, {
    nullable: false
  })
  create!: Main_categoryCreateInput;

  @TypeGraphQL.Field(_type => Main_categoryUpdateInput, {
    nullable: false
  })
  update!: Main_categoryUpdateInput;
}
