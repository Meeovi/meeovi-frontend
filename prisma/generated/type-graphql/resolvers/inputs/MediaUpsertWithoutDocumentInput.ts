import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutDocumentInput } from "../inputs/MediaCreateWithoutDocumentInput";
import { MediaUpdateWithoutDocumentInput } from "../inputs/MediaUpdateWithoutDocumentInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutDocumentInput", {})
export class MediaUpsertWithoutDocumentInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutDocumentInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: MediaCreateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
