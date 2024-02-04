import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnqueueCreateManyInput } from "../../../inputs/EnqueueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEnqueueArgs {
  @TypeGraphQL.Field(_type => [EnqueueCreateManyInput], {
    nullable: false
  })
  data!: EnqueueCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
