import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueCreateInput } from "../../../inputs/EnqueueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueCreateInput, {
    nullable: false
  })
  data!: EnqueueCreateInput;
}
