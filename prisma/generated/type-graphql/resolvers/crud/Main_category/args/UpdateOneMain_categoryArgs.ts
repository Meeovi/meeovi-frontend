import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryUpdateInput } from "../../../inputs/Main_categoryUpdateInput";
import { Main_categoryWhereUniqueInput } from "../../../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryUpdateInput, {
    nullable: false
  })
  data!: Main_categoryUpdateInput;

  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;
}
