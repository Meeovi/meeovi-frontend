import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateCreateInput } from "../../../inputs/Flow_templateCreateInput";
import { Flow_templateUpdateInput } from "../../../inputs/Flow_templateUpdateInput";
import { Flow_templateWhereUniqueInput } from "../../../inputs/Flow_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_templateCreateInput, {
    nullable: false
  })
  create!: Flow_templateCreateInput;

  @TypeGraphQL.Field(_type => Flow_templateUpdateInput, {
    nullable: false
  })
  update!: Flow_templateUpdateInput;
}
