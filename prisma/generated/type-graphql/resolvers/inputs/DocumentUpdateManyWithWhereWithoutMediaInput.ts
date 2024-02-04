import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyMutationInput } from "../inputs/DocumentUpdateManyMutationInput";

@TypeGraphQL.InputType("DocumentUpdateManyWithWhereWithoutMediaInput", {})
export class DocumentUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => DocumentScalarWhereInput, {
    nullable: false
  })
  where!: DocumentScalarWhereInput;

  @TypeGraphQL.Field(_type => DocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: DocumentUpdateManyMutationInput;
}
