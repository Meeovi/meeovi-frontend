import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  where?: DocumentWhereInput | undefined;
}
