import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueCreateInput } from "../../../inputs/EnqueueCreateInput";
import { EnqueueUpdateInput } from "../../../inputs/EnqueueUpdateInput";
import { EnqueueWhereUniqueInput } from "../../../inputs/EnqueueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueWhereUniqueInput, {
    nullable: false
  })
  where!: EnqueueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnqueueCreateInput, {
    nullable: false
  })
  create!: EnqueueCreateInput;

  @TypeGraphQL.Field(_type => EnqueueUpdateInput, {
    nullable: false
  })
  update!: EnqueueUpdateInput;
}
