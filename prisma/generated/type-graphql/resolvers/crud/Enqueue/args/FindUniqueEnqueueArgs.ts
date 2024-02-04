import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueWhereUniqueInput } from "../../../inputs/EnqueueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueWhereUniqueInput, {
    nullable: false
  })
  where!: EnqueueWhereUniqueInput;
}
