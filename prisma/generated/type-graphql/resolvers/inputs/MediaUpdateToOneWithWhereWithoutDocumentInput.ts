import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutDocumentInput } from "../inputs/MediaUpdateWithoutDocumentInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutDocumentInput", {})
export class MediaUpdateToOneWithWhereWithoutDocumentInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutDocumentInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutDocumentInput;
}
