import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentCreateInput } from "../../../inputs/DocumentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentCreateInput, {
    nullable: false
  })
  data!: DocumentCreateInput;
}
