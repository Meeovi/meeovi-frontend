import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutProduct_downloadInput } from "../inputs/MediaUpdateWithoutProduct_downloadInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutProduct_downloadInput", {})
export class MediaUpdateToOneWithWhereWithoutProduct_downloadInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutProduct_downloadInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutProduct_downloadInput;
}
