import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configCreateManyInput } from "../../../inputs/Document_base_configCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocument_base_configArgs {
  @TypeGraphQL.Field(_type => [Document_base_configCreateManyInput], {
    nullable: false
  })
  data!: Document_base_configCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
