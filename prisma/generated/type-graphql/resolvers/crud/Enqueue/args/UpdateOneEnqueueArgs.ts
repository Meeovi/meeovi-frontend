import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueUpdateInput } from "../../../inputs/EnqueueUpdateInput";
import { EnqueueWhereUniqueInput } from "../../../inputs/EnqueueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueUpdateInput, {
    nullable: false
  })
  data!: EnqueueUpdateInput;

  @TypeGraphQL.Field(_type => EnqueueWhereUniqueInput, {
    nullable: false
  })
  where!: EnqueueWhereUniqueInput;
}
