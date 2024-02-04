import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeCreateManyInput } from "../../../inputs/Document_typeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDocument_typeArgs {
  @TypeGraphQL.Field(_type => [Document_typeCreateManyInput], {
    nullable: false
  })
  data!: Document_typeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
