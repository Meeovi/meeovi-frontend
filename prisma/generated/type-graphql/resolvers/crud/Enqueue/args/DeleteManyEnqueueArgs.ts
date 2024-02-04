import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueWhereInput } from "../../../inputs/EnqueueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEnqueueArgs {
  @TypeGraphQL.Field(_type => EnqueueWhereInput, {
    nullable: true
  })
  where?: EnqueueWhereInput | undefined;
}
